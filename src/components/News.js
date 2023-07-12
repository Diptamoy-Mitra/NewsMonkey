import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
// import InfiniteScroll from 'react-infinite-scroller';

export class News extends Component {

  // articles = [
  //   {
  //     "source": {
  //       "id": "cnn",
  //       "name": "CNN"
  //     },
  //     "author": "Florence Davey-Attlee,Elinda Labropoulou,Jomana Karadsheh,Gianluca Mezzofiore,Katie Polglase",
  //     "title": "‘If they had left us be, we wouldn’t have drowned:’ CNN investigation raises questions about Greek coast guard’s account of shipwreck tragedy - CNN",
  //     "description": "The hull of the fishing trawler lifted out of the water as it sank, catapulting people from the top deck into the black sea below. In the darkness, they grabbed onto whatever they could to stay afloat, pushing each other underwater in a frantic fight for surv…",
  //     "url": "https://www.cnn.com/2023/06/23/europe/greece-migrant-boat-disaster-investigation-intl-cmd/index.html",
  //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230623033936-01-migrants-greece-boat-investigative.jpg?c=16x9&q=w_800,c_fill",
  //     "publishedAt": "2023-06-23T18:01:00Z",
  //     "content": "The hull of the fishing trawler lifted out of the water as it sank, catapulting people from the top deck into the black sea below. In the darkness, they grabbed onto whatever they could to stay afloa… [+8299 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "The Philadelphia Inquirer"
  //     },
  //     "author": "Beatrice Forman, Oona Goodin-Smith, Thomas Fitzgerald",
  //     "title": "I95 Philadelphia repairs: Bridge collapse temporary lanes open to traffic today - The Philadelphia Inquirer",
  //     "description": "A Northeast Philadelphia stretch of the busy interstate has been closed since a tanker truck fire on June 11 caused a bridge to collapse.",
  //     "url": "https://www.inquirer.com/news/philadelphia/live/i95-philadelphia-repairs-bridge-collapse-livestream-traffic-20230623.html",
  //     "urlToImage": "https://www.inquirer.com/resizer/cxLQKphjiyjvGDXWpyOfXR2Vqm8=/760x507/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/pmn/WXHLWIPSRVDZDBI525FD4Z6RW4.jpg",
  //     "publishedAt": "2023-06-23T18:00:00Z",
  //     "content": null
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "NBCSports.com"
  //     },
  //     "author": "Kurt Helin",
  //     "title": "Bulls confirm they do not expect Lonzo Ball to return to court next season - NBC Sports",
  //     "description": "\"Going into the offseason, I think our expectation is that he’s not coming back next season,\" Artūras Karnišovas said.",
  //     "url": "https://nba.nbcsports.com/2023/06/23/bulls-confirm-they-do-not-expect-lonzo-ball-to-recover-return-to-court-next-season/",
  //     "urlToImage": "https://nba.nbcsports.com/wp-content/uploads/sites/12/2023/01/GettyImages-1452990145-e1675028613184.jpg",
  //     "publishedAt": "2023-06-23T16:50:00Z",
  //     "content": "The night began, as expected, with the coronation of Victor Wembanyama as the No. 1 pick amid unreasonable expectations for his success. Which he may well surpass.\r\nThen things got interesting.\r\nThro… [+40319 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "usa-today",
  //       "name": "USA Today"
  //     },
  //     "author": ", USA TODAY",
  //     "title": "Supreme Court decision gives Biden rare win on deportation plan - USA TODAY",
  //     "description": "The 8-1 decision was a rare win for Biden at the Supreme Court, allowing him to revive a plan to target immigration enforcement and deportation.",
  //     "url": "https://www.usatoday.com/story/news/politics/2023/06/23/supreme-court-hands-biden-narrow-win-on-immigration-enforcement/11412238002/",
  //     "urlToImage": "https://www.gannett-cdn.com/presto/2023/03/08/USAT/67361ecb-e219-4270-8c96-5435b4f76158-AP_AP_Poll_Border_Security.jpg?auto=webp&crop=6803,3827,x0,y345&format=pjpg&width=1200",
  //     "publishedAt": "2023-06-23T16:45:48Z",
  //     "content": "WASHINGTON The Supreme Court handed President Joe Biden a rare win Friday in a major immigration case,rulingthat Republican officials in two states who challenged the president's effort to prioritize… [+5518 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "cnn",
  //       "name": "CNN"
  //     },
  //     "author": "By <a href=\"/profiles/helen-regan\">Helen Regan</a>, Adam Renton, Sana Noor Haq, Hannah Strange and <a href=\"/profiles/aditi-sandal\">Aditi Sangal</a>, CNN",
  //     "title": "Missing Titanic sub crew killed after 'catastrophic implosion': Live updates - CNN",
  //     "description": "The Titanic-bound submersible that went missing on Sunday with five people on board suffered a \"catastrophic implosion,\" killing everyone on board, the US Coast Guard said Thursday. Follow here for live updates.",
  //     "url": "https://www.cnn.com/americas/live-news/titanic-missing-sub-oceangate-06-23-23/index.html",
  //     "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/230622172220-07-sub-search-0621-super-tease.jpg",
  //     "publishedAt": "2023-06-23T16:35:00Z",
  //     "content": "A friend of Paul Henri Nargeolet, who was aboard the Titan submersible that imploded over the weekend, described the explorer as an incredibly talented iconic legendary the greatest deep diver that t… [+1753 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "CoinDesk"
  //     },
  //     "author": "James Rubin",
  //     "title": "Bitcoin Hits One-Year High, Soars Past $31.3K - CoinDesk",
  //     "description": "The largest cryptocurrency by market capitalization has been surging this week after three financial services giants filed applications for spot bitcoin ETFs.",
  //     "url": "https://www.coindesk.com/markets/2023/06/23/bitcoin-hits-one-year-high-soars-past-313k/",
  //     "urlToImage": "https://www.coindesk.com/resizer/g5jOFbxCKMmqVSfoVoyNvWPbjSA=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/LRPBGYNZOBGHVK72ZEWJ5DHLUM.png",
  //     "publishedAt": "2023-06-23T16:24:00Z",
  //     "content": "Bitcoin continued its mid-June surge on Friday, soaring to a one-year high above $31,000.\r\nThe largest cryptocurrency by market capitalization was recently trading at $31,143, up more than 3.6%, acco… [+2703 chars]"
  //   },

  // ]

  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    console.log("Hello I am constructor from news component")
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalArticles:0
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
  }

  async componentDidMount() {
    this.props.setProgress(10);
    // console.log("componentDidMount");
    fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f88288f4bca14599a2334cadfb3d6f4b&page=1&pageSize=${this.props.pageSize}`).then((Response) => Response.json()).then((data) => {
      this.props.setProgress(100)
      this.setState({
        articles: data.articles,
        totalArticles: data.totalResults,
        loading: false,
      
      })
      // this.props.setProgress(50)
    })
    this.props.setProgress(50);
  }
  
  fetchMoreData=()=>{
    this.setState({page :this.state.page+1})
   
  }
  handlePrevClick = async () => {
    // console.log("Previous");
    this.setState({
      loading: true,
    })
    fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f88288f4bca14599a2334cadfb3d6f4b&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`).then((Response) => Response.json()).then((data) => {

      this.setState({
        page: this.page - 1,
        articles: data.articles,
        loading: false,

      })
    })

  }
  handleNextClick = async () => {
    // console.log("next");
    if (!(this.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {



      this.setState({
        loading: true,
      })
      fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f88288f4bca14599a2334cadfb3d6f4b&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`).then((Response) => Response.json()).then((data) => {

        this.setState({
          page: this.page + 1,
          articles: data.articles,
          loading: false,

        })
      })
    }

  }

  render() {
    console.log("render")
    return (
      <div className='container my-3' >
        <h1 className="text-center" style={{ margin: '35px 0px' ,marginTop:'90px'}}>
          NewsMonkey - Top  {this.capitalizeFirstLetter(this.props.category)} Headlines
        </h1>


        {this.state.loading && <Spinner></Spinner>}

      
          <div className="row">

            {!this.state.loading && this.state.articles?.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ""}
                  description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage}
                  newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}

          </div>
     



        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" class="btn btn-secondary " onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> 
      </div>
    )
  }

}
export default News

