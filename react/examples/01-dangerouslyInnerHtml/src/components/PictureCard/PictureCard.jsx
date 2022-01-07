import './PictureCard.css'

export const PictureCard = ({ picture }) => {
  const { title, imageSrc, description } = picture

  const createMarkup = () => {
    return {
      __html: `<img src='${imageSrc}' />`
    };
  };
  return (
    <div className="picture-card">
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={createMarkup()} />
      <p>{description}</p>
      
      <label>Original image:</label>
      <a href={imageSrc}>{imageSrc}</a>
    </div>
  )
}
