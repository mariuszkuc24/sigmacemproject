import './externatLinkButton.scss';
interface ICustomComponentProps {
  urlToPage: string;
  namePage: string;
}

const ExternalLinkButton = (props: ICustomComponentProps) => {
  const { urlToPage, namePage } = props;
  return (
    <a
      className="btn-link"
      target="_blank"
      rel="noopener noreferrer"
      href={urlToPage}
    >
      {namePage}
    </a>
  );
};

export default ExternalLinkButton;
