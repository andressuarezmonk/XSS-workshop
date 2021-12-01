import './PictureCard.css'

export const PictureCard = ({ picture }) => {
  const { title, imageSrc, description } = picture
  return (
    <div className="picture-card">
      <h1>{title}</h1>
      <img src={imageSrc} alt="" />
      <p>{description}</p>
      
      <label>Original image:</label>
      <a href={imageSrc}>{imageSrc}</a>
    </div>
  )
}
