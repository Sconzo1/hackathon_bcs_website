import React, {Fragment, useCallback, useState} from "react";
import PropTypes from "prop-types";
import TermsOfServiceDialog from "./TermsOfServiceDialog";
import ModalBackdrop from "../../../shared/components/ModalBackdrop";


const DialogSelector = ({
                            dialogOpen,
                            openTermsDialog,
                            openRegisterDialog,
                            openLoginDialog,
                            openChangePasswordDialog,
                            onClose,
                        }) => {
    const [loginStatus, setLoginStatus] = useState(null);
    const [registerStatus, setRegisterStatus] = useState(null);

    const _onClose = useCallback(() => {
        setLoginStatus(null);
        setRegisterStatus(null);
        onClose();
    }, [onClose, setLoginStatus, setRegisterStatus]);

    const printDialog = useCallback(() => {
        switch (dialogOpen) {
            case "termsOfService":
                return <TermsOfServiceDialog onClose={openRegisterDialog}/>;
            default:
        }
    }, [
        dialogOpen,
        openChangePasswordDialog,
        openLoginDialog,
        openRegisterDialog,
        openTermsDialog,
        _onClose,
        loginStatus,
        registerStatus,
        setLoginStatus,
        setRegisterStatus,
    ]);

    return (
        <Fragment>
            {dialogOpen && <ModalBackdrop open/>}
            {printDialog()}
        </Fragment>
    );
}

DialogSelector.propTypes = {
    dialogOpen: PropTypes.string,
    openLoginDialog: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    openTermsDialog: PropTypes.func.isRequired,
    openRegisterDialog: PropTypes.func.isRequired,
    openChangePasswordDialog: PropTypes.func.isRequired,
};

export default DialogSelector;
