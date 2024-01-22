import React from 'react';
import Svg, {Path, SvgProps, ClipPath, Rect, Defs, G} from 'react-native-svg';

const AlermIcon = ({color, width, height}: SvgProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      x="http://www.w3.org/2000/svg">
      <G clip-path="url(#clip0_151_34)">
        <Path
          d="M6.68687 20.4623L4.75239 23.7201C4.67278 23.8529 4.54739 23.9427 4.40609 23.9798C4.26478 24.017 4.10955 24.0013 3.97421 23.9232C3.83888 23.8451 3.74733 23.722 3.70951 23.5834C3.6717 23.4447 3.68762 23.2924 3.76723 23.1595L5.7873 19.7612C5.33552 19.3647 4.92155 18.9252 4.55336 18.4526C4.15333 17.9389 3.80703 17.3843 3.51845 16.7944C3.21196 16.1675 2.97512 15.5034 2.81392 14.8101C2.65868 14.1363 2.57509 13.4351 2.57509 12.7183C2.57509 11.4391 2.83382 10.2203 3.3055 9.10511C3.79509 7.94693 4.50958 6.90593 5.39721 6.0368C6.28485 5.16573 7.34563 4.46457 8.52384 3.98411C9.65827 3.52318 10.9021 3.26732 12.2057 3.26732C13.5093 3.26732 14.7532 3.52122 15.8876 3.98411C17.0678 4.46261 18.1286 5.16573 19.0143 6.03485C19.9019 6.90593 20.6164 7.94693 21.104 9.10316C21.5737 10.2164 21.8344 11.4371 21.8344 12.7164C21.8344 13.9956 21.5757 15.2163 21.104 16.3296C20.6144 17.4878 19.8999 18.5288 19.0143 19.3979C18.9366 19.4741 18.8511 19.5541 18.7595 19.6381C18.7157 19.6791 18.67 19.7202 18.6222 19.7612L20.6403 23.1576C20.7199 23.2904 20.7358 23.4427 20.698 23.5814C20.6602 23.7201 20.5686 23.8451 20.4333 23.9213C20.298 23.9994 20.1427 24.015 20.0014 23.9779C19.8601 23.9408 19.7327 23.8509 19.6551 23.7181L17.7206 20.4623C16.9564 20.9877 16.1086 21.4076 15.203 21.6986C14.2577 22.0014 13.2506 22.1674 12.2037 22.1674C11.6545 22.1674 11.1131 22.1205 10.5837 22.0326C10.0444 21.9428 9.51895 21.808 9.01344 21.6342C8.56166 21.4779 8.12779 21.2924 7.71183 21.0756C7.35559 20.892 7.01327 20.6869 6.68687 20.4623ZM11.4116 7.7399C11.4116 7.58561 11.4753 7.44694 11.5788 7.34342L11.5808 7.34147C11.6843 7.23991 11.8276 7.17741 11.9828 7.17741C12.1401 7.17741 12.2834 7.23991 12.3868 7.34147C12.4903 7.44303 12.554 7.58365 12.554 7.73795V13.0972H17.7982C17.9555 13.0972 18.0988 13.1597 18.2023 13.2613C18.2062 13.2652 18.2102 13.2711 18.2142 13.275C18.3097 13.3765 18.3694 13.5113 18.3694 13.6578C18.3694 13.8121 18.3057 13.9507 18.2023 14.0542L18.2003 14.0562C18.0968 14.1578 17.9535 14.2203 17.7982 14.2203H11.9828C11.8256 14.2203 11.6843 14.1578 11.5788 14.0562L11.5768 14.0542C11.4733 13.9527 11.4097 13.8121 11.4097 13.6597V7.7399H11.4116ZM18.2042 6.82976C17.4201 6.06024 16.4867 5.44306 15.4498 5.0212C14.4507 4.61495 13.3541 4.39035 12.2037 4.39035C11.0534 4.39035 9.95481 4.61495 8.95572 5.01924C7.91882 5.44111 6.98342 6.06024 6.20126 6.82781C5.41712 7.59732 4.78821 8.51332 4.35832 9.53088C3.94436 10.5113 3.71548 11.5875 3.71548 12.7164C3.71548 13.3531 3.78713 13.9722 3.92446 14.564C4.06576 15.1753 4.27274 15.7593 4.54142 16.3101C4.81607 16.8706 5.15242 17.3999 5.54449 17.8843C5.93855 18.3725 6.38834 18.8159 6.88192 19.2065L6.89386 19.2163C7.26603 19.5092 7.66407 19.7729 8.084 20.0014C8.49797 20.228 8.93383 20.4213 9.3876 20.5776C9.83141 20.7299 10.2931 20.849 10.7688 20.9272C11.2325 21.0033 11.7122 21.0443 12.2018 21.0443C13.3521 21.0443 14.4487 20.8197 15.4478 20.4135C16.4847 19.9916 17.4201 19.3725 18.2023 18.6049C18.9864 17.8354 19.6153 16.9194 20.0452 15.9019C20.4592 14.9214 20.688 13.8453 20.688 12.7164C20.688 11.5875 20.4592 10.5113 20.0452 9.53088C19.6173 8.51528 18.9864 7.59732 18.2042 6.82976ZM24.2227 4.8669C24.2227 5.20284 24.1809 5.53095 24.1013 5.84931C24.0197 6.17547 23.8983 6.48797 23.743 6.78289C23.5858 7.08171 23.3927 7.36295 23.1678 7.62467C22.9429 7.88638 22.6862 8.12661 22.4016 8.34145C22.2762 8.4352 22.125 8.47231 21.9817 8.45278C21.8364 8.4352 21.6991 8.36294 21.6035 8.23989C21.5836 8.2145 21.5657 8.18716 21.5498 8.15981C21.5359 8.13442 21.5239 8.10708 21.514 8.08169L21.51 8.07193C21.2851 7.40202 20.9866 6.76335 20.6243 6.16961C20.2562 5.56611 19.8203 5.00753 19.3267 4.50168C18.8332 3.99583 18.2839 3.54271 17.6868 3.15404C17.0977 2.76928 16.4608 2.44702 15.7901 2.19703C15.6428 2.14234 15.5314 2.03492 15.4717 1.90407C15.412 1.77321 15.402 1.62087 15.4578 1.47634C15.4816 1.41579 15.5155 1.35915 15.5553 1.31228C15.5971 1.26345 15.6488 1.22048 15.7025 1.18923L15.7045 1.18728C16.1543 0.892365 16.6559 0.671666 17.1813 0.523231C17.7306 0.368937 18.3097 0.290813 18.8869 0.290813C19.3327 0.290813 19.7825 0.337687 20.2203 0.427529C20.6542 0.517371 21.0741 0.650182 21.4682 0.82596C21.8822 1.0115 22.2703 1.24197 22.6146 1.51931C22.9449 1.78493 23.2395 2.09547 23.4843 2.44898C23.7211 2.79272 23.9102 3.17162 24.0356 3.58568C24.157 3.98411 24.2227 4.40988 24.2227 4.8669ZM22.728 6.26922C22.8434 6.05243 22.931 5.82196 22.9907 5.58369C23.0484 5.35322 23.0783 5.11299 23.0783 4.86495C23.0783 4.51925 23.0305 4.2009 22.9429 3.90989C22.8514 3.60325 22.7141 3.32592 22.5429 3.07787C22.3618 2.81616 22.1409 2.58374 21.8881 2.38257C21.6234 2.17164 21.3229 1.99195 21.0005 1.84938C20.6801 1.7068 20.3378 1.59743 19.9855 1.52517C19.6292 1.45095 19.2591 1.41384 18.8889 1.41384C18.5366 1.41384 18.1903 1.44704 17.854 1.51345C17.6768 1.5486 17.5017 1.59352 17.3325 1.64821C17.7883 1.88063 18.2241 2.1443 18.6401 2.43726C19.1854 2.82006 19.6909 3.25365 20.1527 3.7263C20.6403 4.22629 21.0761 4.77316 21.4563 5.35713C21.7747 5.84735 22.0513 6.36688 22.2862 6.91179C22.3399 6.84929 22.3917 6.78484 22.4414 6.72039C22.5489 6.57781 22.6444 6.42742 22.728 6.26922ZM8.18551 2.64038C7.50286 2.86108 6.85206 3.15404 6.24704 3.50951C5.63206 3.87083 5.06286 4.29855 4.54739 4.78292C4.03193 5.26729 3.5702 5.80634 3.17414 6.39227C2.78207 6.97038 2.45369 7.59537 2.19894 8.25356C2.14321 8.39809 2.03375 8.50746 1.90041 8.56606C1.76706 8.62465 1.61183 8.63441 1.46455 8.57973C1.40285 8.55629 1.34713 8.52504 1.29936 8.48403C1.2516 8.44496 1.21179 8.39809 1.17995 8.34731C1.0267 8.12466 0.889378 7.88638 0.769965 7.63834C0.650552 7.3903 0.551042 7.13249 0.469443 6.86882C0.387844 6.6032 0.326147 6.32782 0.284353 6.04462C0.244549 5.76533 0.222656 5.48213 0.222656 5.19502C0.222656 4.57199 0.328138 3.9802 0.517208 3.43334C0.71822 2.85522 1.01277 2.32984 1.37499 1.87086C1.6576 1.51345 1.98201 1.20095 2.33427 0.937286C2.69052 0.671666 3.07662 0.454873 3.48064 0.298625C3.89858 0.136519 4.33643 0.0369112 4.78025 0.00761483C5.21013 -0.0197284 5.644 0.0173803 6.07389 0.13066C6.51771 0.247845 6.95356 0.443154 7.36753 0.728305C7.75562 0.995879 8.12381 1.33962 8.46016 1.76735C8.55569 1.89039 8.5935 2.03883 8.5736 2.17945C8.55569 2.32203 8.48205 2.45679 8.35666 2.55054C8.33079 2.57007 8.30293 2.58765 8.27507 2.60327C8.24919 2.61694 8.22133 2.62866 8.19546 2.63843L8.18551 2.64038ZM3.76126 3.97239C4.27075 3.49388 4.82801 3.0642 5.42508 2.69311C5.92661 2.38062 6.458 2.10719 7.01327 1.87672C6.86002 1.74391 6.7028 1.63063 6.54159 1.53493C6.2948 1.38845 6.03806 1.28103 5.77735 1.21267C5.47085 1.13259 5.15839 1.10525 4.84792 1.12478C4.5255 1.14627 4.20707 1.22048 3.89858 1.33962C3.58811 1.46071 3.29157 1.62477 3.01692 1.82985C2.74227 2.03492 2.48951 2.27906 2.27059 2.5564C1.98599 2.91577 1.75313 3.33177 1.5959 3.79075C1.44664 4.22238 1.36305 4.69503 1.36305 5.19307C1.36305 5.42939 1.38096 5.65986 1.4128 5.88251C1.44664 6.11102 1.49639 6.33172 1.56207 6.54656C1.58396 6.61883 1.60785 6.68914 1.63173 6.75749C1.87055 6.30438 2.14122 5.87079 2.44175 5.46064C2.83382 4.9255 3.27565 4.42746 3.76126 3.97239Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_151_34">
          <Rect width="224" height="224" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default AlermIcon;