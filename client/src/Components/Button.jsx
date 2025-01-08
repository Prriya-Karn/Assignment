import React, { Fragment } from "react";
import PropTypes from "prop-types";
import allButtonData from "../buttonData";

const Button = ({ editor }) => {
    return (
        <Fragment>
            {
                allButtonData.map((e) => {

                    const createElementWitTag =  React.createElement(
                        e.tag,
                        {style:{marginLeft:"2rem",color:"black"}},
                        // { className: 'my-button-label' },
                        e.label)

                      
                        
                    return (
                        
                        <Fragment key={e.id}>
                            <button
                                onClick={() => editor.chain().focus()[e.buttName]().run()}
                                disabled={!editor.can().chain().focus()[e.buttName]().run()}
                                className={editor.isActive(e.buttName) ? "is-active" : ""}>
                                <div className="">{createElementWitTag}</div>
                            </button>
                           
                        </Fragment>
                    )
                })
            }
        </Fragment>

    );
};

// Define propTypes 
Button.propTypes = {
    editor: PropTypes.object.isRequired,
};

export default Button;
