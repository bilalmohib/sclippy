import { ButtonBase } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface CommandSliderActionButtonsProps {
    className?: string;
    handleScrollRight: () => void;
    handleScrollLeft: () => void;
}

const CommandSliderActionButtons = ({
    className,
    handleScrollRight,
    handleScrollLeft
}: CommandSliderActionButtonsProps) => {
    return (
        <div className={`${className} flex flex-row justify-end gap-4`}>
            <ButtonBase
                className="w-14 h-14 rounded-full bg-gray-400 text-white dark:text-black dark:bg-gray-300 flex flex-col justify-center items-center border-2 border-transparent hover:border-solid border-blue-500"
                onClick={handleScrollLeft}
            >
                <ArrowBackIcon fontSize="large" />
            </ButtonBase>
            <ButtonBase
                className="w-14 h-14 rounded-full bg-black text-white dark:text-black dark:bg-white flex flex-col justify-center items-center border-2 border-transparent hover:border-solid border-blue-500"
                onClick={handleScrollRight}
            >
                <ArrowForwardIcon fontSize="large" />
            </ButtonBase>
        </div>
    )
}
export default CommandSliderActionButtons;