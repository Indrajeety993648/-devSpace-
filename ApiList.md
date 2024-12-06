#DevTinder Api : 

    authRouter
-POST/signup
-POST/login
-POST/logout

profileRouter
-GET/profile/view
-GET/profile/edit
-GET/profile/password


 connectionRequestRouter
 -POST/request/send/interested/:userID
 -POST/request/send/ignored/:userID
 -POST/request/review/accepted/:requestID
 -POST/request/revieq/rejected/:requestID


 userRouter
 -GET/user/connections
 -GET/user/requests
 -GET/user/feed -  Gets you  the profile  of other  users  on platform 


 Status  :  ignore , interested  ,  accepted ,  rejected

 