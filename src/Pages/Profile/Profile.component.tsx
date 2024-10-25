import Button from '@mui/material/Button';
import Dialog, { DialogProps, dialogClasses } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled, useTheme } from '@mui/material/styles';
import { type FC } from 'react';
import { ProfileDialogPropsType } from './Profile';
import { Box, Typography } from '@mui/material';

export interface StyledDialogProps extends DialogProps {
  size?: string;
}

const Profile: FC<ProfileDialogPropsType> = (props) => {
  const { open = true, handleClose } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const StyledDialog = styled<(props: StyledDialogProps) => JSX.Element>(Dialog)(({ theme, size }) => ({
    "& .MuiDialogTitle-root": {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    "& .MuiDialogContent-root": {
      padding: theme.spacing(4),
    },
    "& .MuiDialogActions-root": {
      paddingTop: "12px",
      paddingBottom: "12px",
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [`& .${dialogClasses.paper}`]: {
      width: size,
      maxWidth: size,
    },
  }));

  const classes = {
    box: {
      display: "flex",
      alignItems: "center",
      gap: 2,
    },
  };

  return (
    <StyledDialog
      sx={{ direction: "rtl" }}
      size="620px"
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>
        مشخصات کاربری
      </DialogTitle>
      <DialogContent>
        <Box sx={classes.box}>
          <Typography>
            نام:
          </Typography>
          <Typography>
            first name
          </Typography>
        </Box>
        <Box sx={classes.box}>
          <Typography>
            نام خانوادگی:
          </Typography>
          <Typography>
            last name
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          بستن
        </Button>
        <Button autoFocus onClick={handleClose}>
          ویرایش مشخصات
        </Button>
      </DialogActions>
    </StyledDialog>
  );
}

export default Profile;