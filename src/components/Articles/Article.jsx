import './styles.css'


export const Article = ({ title, provider, description, foto }) => {
   return (
      <article>
         <img src={foto} alt={title} />

         <div className="content">
            <h2>{title}</h2>
            <h3>{provider}</h3>
            <p>{description}</p>
         </div>
      </article >
   )
}
