const Message = ({ variant, children }) => {
    const getVariantClass = () => {
      switch (variant) {
        case "succcess":
          return "bg-success text-success-subtle";
        case "error":
          return "bg-danger text-danger-subtle";
        default:
          return "bg-primary text-primary-subtle";
      }
    };
  
    return <div className={`p-4 rounded ${getVariantClass()}`}>{children}</div>;
  };
  
  export default Message;