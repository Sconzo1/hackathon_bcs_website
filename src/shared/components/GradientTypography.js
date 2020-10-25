import React, {memo} from "react";
import {Typography} from "@material-ui/core";

function GradientTypography(props) {
    const {children, ...rest} = props
    return (
        <Typography paragraph {...rest}>
            <span className="title-montserrat" style={{
                background: "linear-gradient(303.91deg, #8A8AF4 7.57%, #3984DD 94.39%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent"
            }}>{children}</span>
        </Typography>
    );
}

export default memo(GradientTypography);
