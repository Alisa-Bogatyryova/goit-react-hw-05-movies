import errorImage from '../../images/error.png';


export default function NotFoundView() {
  return (
    <main role="alert">
      <img src={errorImage} width="650" alt="Error" />
      <h1>Page not found 😨</h1>
    </main>
  );
}