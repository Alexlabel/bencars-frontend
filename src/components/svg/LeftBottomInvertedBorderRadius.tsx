type Props = {
    className: string,
}

export const LeftBottomInvertedBorderRadius : React.FC<Props> = ({className}) => {
    return (
            <svg width="375" height="340" viewBox="0 0 375 340" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                <rect width="375" height="340" rx="24" fill="#141210"/>
                <path d="M351 284H375V260C375 273.255 364.255 284 351 284Z" fill="#F2F2F2"/>
                <g clipPath="url(#clip0_0_177)">
                    <path d="M227 340H251V316C251 329.255 240.255 340 227 340Z" fill="#F2F2F2"/>
                    <path d="M251 320C251 300.118 267.118 284 287 284H375V340H251V320Z" fill="#F2F2F2"/>
                </g>
                <defs>
                    <clipPath id="clip0_0_177">
                        <rect width="148" height="56" fill="white" transform="translate(227 284)"/>
                    </clipPath>
                </defs>
        </svg>
    )
}