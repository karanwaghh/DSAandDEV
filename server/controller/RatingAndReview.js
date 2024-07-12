const RatingAndReview = require("../model/RatingAndReview");
const Tutorial = require("../model/Tutorial");

//createRating
exports.createRating = async (req, res) => {
    try{

        //get user id
        const userId = req.user.id;
        //fetchdata from req body
        const {rating, review, tutorialId} = req.body;
        //check if user is enrolled or not
        const tutorialDetails = await Tutorial.findOne(
                                    {_id:tutorialId,
                                    studentsEnrolled: {$elemMatch: {$eq: userId} },
                                });

        if(!tutorialDetails) {
            return res.status(404).json({
                success:false,
                message:'Student is not enrolled in the tutorial',
            });
        }
        //check if user already reviewed the tutorial
        const alreadyReviewed = await RatingAndReview.findOne({
                                                user:userId,
                                                tutorial:tutorialId,
                                            });
        if(alreadyReviewed) {
            return res.status(403).json({
                success:false,
                message:'Tutorial is already reviewed by the user',
            });
        }
        //create rating and review
        const ratingReview = await RatingAndReview.create({
                                        rating, review, 
                                        tutorial:tutorialId,
                                        user:userId,
                                    });
       
        //update tutorial with this rating/review
        const updatedTutorialDetails = await Tutorial.findByIdAndUpdate({_id:tutorialId},
                                    {
                                        $push: {
                                            ratingAndreviews: ratingReview._id,
                                        }
                                    },
                                    {new: true});
        console.log(updatedTutorialDetails);
        //return response
        return res.status(200).json({
            success:true,
            message:"Rating and Review created Successfully",
            ratingReview,
        })
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

//getAverageRating
exports.getAverageRating = async (req, res) => {
    try {
            //get tutorial ID
            const tutorialId = req.body.tutorialId;
            //calculate avg rating
            const result = await RatingAndReview.aggregate([
                {
                    $match:{
                        tutorial: new mongoose.Types.ObjectId(tutorialId),
                    },
                },
                {
                    $group:{
                        _id:null,
                        averageRating: { $avg: "$rating"},
                    }
                }
            ])

            //return rating
            if(result.length > 0) {

                return res.status(200).json({
                    success:true,
                    averageRating: result[0].averageRating,
                })

            }
            
            //if no rating/Review exist
            return res.status(200).json({
                success:true,
                message:'Average Rating is 0, no ratings given till now',
                averageRating:0,
            })
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

//getAllRatingAndReviews
exports.getAllRating = async (req, res) => {
    try{
            const allReviews = await RatingAndReview.find({})
                                    .sort({rating: "desc"})
                                    .populate({
                                        path:"user",
                                        select:"firstName lastName email image",
                                    })
                                    .populate({
                                        path:"tutorial",
                                        select: "tutorialName",
                                    })
                                    .exec();
            return res.status(200).json({
                success:true,
                message:"All reviews fetched successfully",
                data:allReviews,
            });
    }   
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    } 
}