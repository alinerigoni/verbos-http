import './style.scss';

export const H1 = ({ text, color }) => <h1 className={`h1 ${color}`}>{text}</h1>;

export const H2 = ({ text, color }) => <h2 className={`h2 ${color}`}>{text}</h2>;

export const H3 = ({ text, color }) => <h3 className={`h3 ${color}`}>{text}</h3>;

export const H4 = ({ text, color }) => <h4 className={`h4 ${color}`}>{text}</h4>;

export const H5 = ({ text, color }) => <h5 className={`h5 ${color}`}>{text}</h5>;

export const H6 = ({ text, color }) => <h6 className={`h6 ${color}`}>{text}</h6>;

export const Paragraph = ({ text, color }) => <p className={`paragraph ${color}`}>{text}</p>;