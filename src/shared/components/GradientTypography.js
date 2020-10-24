import React, {memo} from "react";
import {Typography} from "@material-ui/core";

function GradientTypography(props) {
    const {children, ...rest} = props
    return (
        <Typography paragraph {...rest}>
            <span className="title-montserrat" style={{
                background: "linear-gradient(90deg, #8A8AF4 0%, #3984DD 100%)",
                webkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent"
            }}>{children}</span>
        </Typography>
    );
}

export default memo(GradientTypography);
