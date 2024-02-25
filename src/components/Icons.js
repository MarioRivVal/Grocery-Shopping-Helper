export function PencilIcon() {
     return (
          <svg
               width="25"
               height="24"
               viewBox="0 0 25 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
          >
               <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.9981 5C18.7376 5 18.4877 5.1035 18.3034 5.28773L7.40553 16.1856C7.02106 16.5701 6.7483 17.0519 6.61643 17.5794L6.35486 18.6256L7.40113 18.3641C7.92863 18.2322 8.41037 17.9594 8.79484 17.575L19.6928 6.67704C19.784 6.58582 19.8563 6.47752 19.9057 6.35833C19.9551 6.23915 19.9805 6.1114 19.9805 5.98239C19.9805 5.85338 19.9551 5.72563 19.9057 5.60645C19.8563 5.48726 19.784 5.37896 19.6928 5.28773C19.6015 5.19651 19.4932 5.12415 19.374 5.07478C19.2549 5.02541 19.1271 5 18.9981 5ZM16.8892 3.87352C17.4485 3.31421 18.2071 3 18.9981 3C19.3898 3 19.7776 3.07714 20.1394 3.22702C20.5013 3.3769 20.83 3.59658 21.107 3.87352C21.3839 4.15046 21.6036 4.47924 21.7535 4.84108C21.9033 5.20292 21.9805 5.59074 21.9805 5.98239C21.9805 6.37404 21.9033 6.76186 21.7535 7.1237C21.6036 7.48554 21.3839 7.81432 21.107 8.09126L10.2091 18.9892C9.56826 19.63 8.76536 20.0846 7.8862 20.3043L5.22303 20.9701C4.88225 21.0553 4.52176 20.9555 4.27338 20.7071C4.025 20.4587 3.92515 20.0982 4.01035 19.7575L4.67614 17.0943C4.89593 16.2151 5.35053 15.4122 5.99132 14.7714L16.8892 3.87352Z"
                    fill="#0E4430"
               />
               <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.2734 10.7072L14.2734 7.70718L15.6877 6.29297L18.6877 9.29297L17.2734 10.7072Z"
                    fill="#0E4430"
               />
               <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.9805 20C12.9805 19.4477 13.4282 19 13.9805 19L20.9805 19C21.5328 19 21.9805 19.4477 21.9805 20C21.9805 20.5523 21.5328 21 20.9805 21L13.9805 21C13.4282 21 12.9805 20.5523 12.9805 20Z"
                    fill="#0E4430"
               />
          </svg>
     );
}

export function CheckIcon({ marked }) {
     return (
          <svg
               width="25"
               height="24"
               viewBox="0 0 25 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
          >
               <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.3939 6.24744C20.8095 6.61112 20.8516 7.24288 20.4879 7.65852L11.7379 17.6585C11.3756 18.0726 10.7468 18.1162 10.3308 17.756L5.08081 13.2106C4.66328 12.8491 4.61785 12.2175 4.97935 11.8C5.34086 11.3825 5.97239 11.337 6.38992 11.6985L10.8879 15.5929L18.9828 6.34151C19.3465 5.92587 19.9782 5.88375 20.3939 6.24744Z"
                    fill={marked ? "#0E4430" : "#CD2727"}
               />
          </svg>
     );
}

export function DeleteIcon() {
     return (
          <svg
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
          >
               <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                    fill="#CD2727"
               />
               <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289Z"
                    fill="#CD2727"
               />
          </svg>
     );
}