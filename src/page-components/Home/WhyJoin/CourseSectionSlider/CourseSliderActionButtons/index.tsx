import { ButtonBase } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface CourseSliderActionButtonsProps {
    className?: string;
}

const CourseSliderActionButtons = ({
    className
}: CourseSliderActionButtonsProps) => {
    return (
        <div className={`${className} flex flex-row justify-end gap-4`}>
            <ButtonBase className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gray-400 text-white dark:text-black dark:bg-gray-300 flex flex-col justify-center items-center border-2 border-transparent hover:border-solid border-blue-500">
                <ArrowBackIcon fontSize="large" />
            </ButtonBase>
            <ButtonBase className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-black text-white dark:text-black dark:bg-white flex flex-col justify-center items-center border-2 border-transparent hover:border-solid border-blue-500">
                <ArrowForwardIcon fontSize="large" />
            </ButtonBase>
        </div>
    )
}
export default CourseSliderActionButtons;