interface LogoProps {
    className?: string;
}

const Logo = ({
    className
}: LogoProps) => {
    return (
        <div className={className}>
            <h3 className="text-primary text-2xl font-inika">Sclippy</h3>
        </div>
    )
}
export default Logo;