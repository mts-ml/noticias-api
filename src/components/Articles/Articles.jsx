import { Article } from "./Article";
import { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";

import axios from "axios";


export const Articles = () => {
   const [news, setNews] = useState([])

   /* Assim que a aplicação montar, faz a busca na API */
   useEffect(() => {
      async function loadNews() {
         try {
            const response = await axios.get('https://api.spaceflightnewsapi.net/v4/articles/?format=json')
            const newsData = response.data.results

            setNews(newsData)
         } catch (error) {
            console.log(`Erro na requisição: ${error}`)
         } finally {
            console.log('Requisição encerrada')
         }
      }
      loadNews()
   }, [])


   return (
      <section id="articles">
         {/* Quando o estado news está vazio, mostra o Loader, quando
         carregar as notícias da API, ele some. */}
         {news.length === 0 ? <Loader /> :
            news.map((article) => {
               return (
                  <Article key={article.id}
                     title={article.title}
                     provider={article.news_site}
                     description={article.summary}
                     foto={article.image_url} />
               )
            })
         }
      </section>
   )

}
