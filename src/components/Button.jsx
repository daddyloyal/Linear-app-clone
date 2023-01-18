import styles from "./style";


const Button = ({ title, onClick }) => {
  return (
    <button
      className="bg-gradient-to-tr from-purple-900 to-indigo-500 text-white font-bold py-2 px-6 rounded-full flex"
      onClick={onClick}
    >
      {title} <svg className="mt-1 ml-2" fill="none" stroke="currentColor" strokeWidth={1.5} width={15} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
    </button>

  );
};

export default Button;
