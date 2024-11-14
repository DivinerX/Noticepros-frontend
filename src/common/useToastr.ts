import toastr from "toastr";

const useToastr = () => {
  // You can customize Toastr options here
  toastr.options = {
    closeButton: true,
    progressBar: true,
    positionClass: "toast-top-right", // TailwindCSS class for positioning
    timeOut: 3000, // Duration in milliseconds
    extendedTimeOut: 1000,
  };

  const success = (message: string, title: string = "Success") => {
    toastr.success(message, title);
  };

  const error = (message: string, title: string = "Error") => {
    toastr.error(message, title);
  };

  const info = (message: string, title: string = "Info") => {
    toastr.info(message, title);
  };

  const warning = (message: string, title: string = "Warning") => {
    toastr.warning(message, title);
  };

  return { success, error, info, warning };
};

export default useToastr;