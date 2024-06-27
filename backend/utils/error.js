export const errorHandler = (status, message) => {
   return (req, res) => {
     res.status(status).json({ message });
   };
 };
 