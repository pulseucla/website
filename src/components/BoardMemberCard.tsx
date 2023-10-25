import React from "react";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface board {
    image: string,
    name: string,
    title: string,
    description: string
}

{/* `flex rounded-[15px] border-2 pl-2 pr-2 w-fit mt-2 justify-center items-center border-black */}
const CustomButton = styled(Button)({
    borderRadius: '20px', 
    borderColor: "black", 
    backgroundColor: 'white',
    color: 'black',
    marginTop: '2',
    boxShadow: 'none',
    border: '1px solid',
    width: 'fit-content',
    '&:hover': {
      pointer: 'cursor',
      color: 'white',
      backgroundColor: 'black',
    },
    '&:active': {
        color: 'white',
        backgroundColor: 'black',
    },
    '&:focus': {
        color: 'white',
        backgroundColor: 'black',
      },
  });
  

const BoardMemberCard : React.FC<board> = ({ image, name, title, description }) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className="max-w-[300px] w-[80vw] flex flex-col border-2 border-black h-[415px]">
            <img src={image} className="h-[268px] object-cover" />
            <div className="flex flex-col justify-evenly text-left p-2 gap-1">
                <p className=" text-[24px]">{name}</p>
                <div className="pb-4 flex flex-col justify-evenly gap-2">
                    <p>{title}</p>
                    <CustomButton aria-describedby={id} variant="contained" onClick={handleClick} size="small"
                        sx={{ borderRadius: '15px', borderColor: "black", backgroundColor: {},}}
                    >
                        Read More
                    </CustomButton>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                    >
                        <Typography sx={{ p: 2 }}>
                            {description}
                        </Typography>
                    </Popover>
                </div>
            </div>
        </div>
    );
}

export default React.memo(BoardMemberCard)