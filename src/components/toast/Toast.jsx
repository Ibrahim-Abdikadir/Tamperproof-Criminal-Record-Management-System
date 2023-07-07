import { message, notification } from "antd";

export const displayErrorMessage = (error) => {
    return message.error(error);
  };
  
  
  export const displaySuccessMessage = (success) => {
    return message.success(success);
  };