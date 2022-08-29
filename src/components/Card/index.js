import React from "react";
import styles from "./Card.module.sass";
import { ReactComponent as plusIcon } from "../../assets/img/icons/plus.svg";

export default function Card(props) {
  const [isAdd, setIsAdd] = React.useState(false);

  const handleCardAdd = () => setIsAdd(!isAdd);

  const price = props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб.";
  return (
    <div className={styles.card}>
      <div className={styles.imgBlock}>
        <button className="btn-32" onClick={props.onFavourite}>
          <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.5849 3.22311C14.3615 2.7098 14.0393 2.24464 13.6365 1.85368C13.2333 1.46155 12.758 1.14993 12.2363 0.935761C11.6954 0.712803 11.1152 0.59868 10.5295 0.600018C9.70771 0.600018 8.90595 0.823295 8.2092 1.24504C8.04252 1.34593 7.88417 1.45674 7.73415 1.57748C7.58413 1.45674 7.42578 1.34593 7.2591 1.24504C6.56235 0.823295 5.76059 0.600018 4.93883 0.600018C4.3471 0.600018 3.7737 0.712483 3.23197 0.935761C2.70857 1.15077 2.23685 1.46005 1.83181 1.85368C1.42842 2.2442 1.10619 2.70947 0.883365 3.22311C0.651672 3.75732 0.533325 4.32461 0.533325 4.90844C0.533325 5.45919 0.646672 6.0331 0.871697 6.61693C1.06005 7.10483 1.33008 7.61092 1.67512 8.12198C2.22185 8.93074 2.9736 9.77423 3.90705 10.6293C5.45389 12.0467 6.98573 13.0258 7.05074 13.0655L7.44578 13.3169C7.6208 13.4277 7.84583 13.4277 8.02085 13.3169L8.4159 13.0655C8.4809 13.0242 10.0111 12.0467 11.5596 10.6293C12.493 9.77423 13.2448 8.93074 13.7915 8.12198C14.1366 7.61092 14.4082 7.10483 14.5949 6.61693C14.82 6.0331 14.9333 5.45919 14.9333 4.90844C14.935 4.32461 14.8166 3.75732 14.5849 3.22311V3.22311Z" />
          </svg>
        </button>
        <img src={props.imageUrl} alt="Sneakers" />
      </div>
      <h5>{props.title}</h5>
      <div className={styles.bottom}>
        <div className={styles.price}>
          <span>Цена:</span>
          <b>{price}</b>
        </div>
        <button className={"btn-32 " + styles.button} onClick={handleCardAdd}>
          {isAdd ? (
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_60_202)">
                <g filter="url(#filter0_d_60_202)">
                  <path
                    d="M9.6567 1.62069C9.83936 1.43633 10.0876 1.33177 10.3471 1.32986C10.6066 1.32795 10.8563 1.42884 11.0416 1.61049C11.227 1.79214 11.3329 2.03977 11.3362 2.29927C11.3395 2.55877 11.24 2.80903 11.0594 2.99536L5.83271 9.52936C5.74292 9.62603 5.63456 9.70362 5.51412 9.75749C5.39368 9.81136 5.26362 9.84041 5.1317 9.8429C4.99979 9.84539 4.86872 9.82127 4.74633 9.77198C4.62394 9.72269 4.51274 9.64924 4.41937 9.55602L0.954039 6.09202C0.76989 5.90779 0.666472 5.65794 0.666534 5.39746C0.666597 5.13697 0.770135 4.88717 0.954372 4.70302C1.13861 4.51888 1.38845 4.41546 1.64894 4.41552C1.90943 4.41558 2.15922 4.51912 2.34337 4.70336L5.08404 7.44469L9.6307 1.65136C9.63897 1.64082 9.64787 1.6308 9.65737 1.62136L9.6567 1.62069Z"
                    fill="white"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_d_60_202"
                  x="0.666534"
                  y="1.32983"
                  width="10.6698"
                  height="10.5132"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_60_202"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_60_202"
                    result="shape"
                  />
                </filter>
                <clipPath id="clip0_60_202">
                  <rect
                    width="10.6667"
                    height="10.6667"
                    fill="white"
                    transform="translate(0.666718 0.666687)"
                  />
                </clipPath>
              </defs>
            </svg>
          ) : <plusIcon/>}
        </button>
      </div>
    </div>
  );
}
