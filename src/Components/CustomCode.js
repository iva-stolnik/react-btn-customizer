import React from "react";

const CustomCode = ({ buttonStyle }) => {
  return (
    <div className="code-container">
      HTML code:
      {
        //ASCII codes for HTML
      }
      <pre>
        &#60;button class="btn"&nbsp;
        {buttonStyle.HTMLtypeAttribute}
        {buttonStyle.HTMLotherAttributes}&#62;
        <br />
        &nbsp;&nbsp;&nbsp;
        <span>{buttonStyle.text}</span>
        <br />
        &#60;/button&#62;
      </pre>
      <br />
      <hr />
      <br />
      CSS code:
      <pre>
        .btn &#123;
        <br />
        &nbsp;&nbsp;color: <span>{buttonStyle.color}</span>;
        <br />
        &nbsp;&nbsp;background-color: <span>{buttonStyle.backgroundColor}</span>
        ;<br />
        &nbsp;&nbsp;font-family: <span>{buttonStyle.fontFamily}</span>;
        <br />
        &nbsp;&nbsp;font-weight: <span>{buttonStyle.fontWeight}</span>;
        <br />
        &nbsp;&nbsp;font-size: <span>{buttonStyle.fontSize}</span>;
        <br />
        &nbsp;&nbsp;text-decoration: <span>{buttonStyle.textDecoration}</span>;
        <br />
        &nbsp;&nbsp;margin: <span>{buttonStyle.margin}</span>; <br />
        &nbsp;&nbsp;padding: <span>{buttonStyle.padding}</span>; <br />
        &nbsp;&nbsp;border: <span>{buttonStyle.border}</span>;<br />
        &nbsp;&nbsp;border-radius: <span>{buttonStyle.borderRadius}</span>;
        <br />
        &nbsp;&nbsp;cursor: <span>{buttonStyle.cursor}</span>;
        <br />
        &#125;
      </pre>
    </div>
  );
};

export default CustomCode;
