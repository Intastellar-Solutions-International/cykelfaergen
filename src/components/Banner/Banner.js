import { local } from "../../localization/local";
import "./Banner.css";
import { LocationContext } from "../../App";
const { useState, useEffect, useRef, useContext } = React;

export default function Banner(){
    const [location, setLocation] = useContext(LocationContext);
    return <>
        <article className="banner">
            <section className="search-container-content">
                <h1 class="search-container-heading">{local[location].banner.title}</h1>
                <p>{local[location].banner.subTitle}</p>
                <div className="reviews" itemscope itemtype="https://schema.org/Product">
                    <div class="fb rating">
                        <div className="stars">
                            <div className="elementor-star-rating" title="5/5" itemtype="http://schema.org/Rating" itemscope="" itemprop="reviewRating">
                                <i className="material-symbols-outlined">star_rate</i>
                                <i className="material-symbols-outlined">star_rate</i>
                                <i className="material-symbols-outlined">star_rate</i>
                                <i className="material-symbols-outlined">star_rate</i>
                                <i className="material-symbols-outlined">star_rate</i>
                                <span itemprop="ratingValue" className="elementor-screen-only">5/5</span>
                            </div>
                        </div>
                        <a href="https://www.facebook.com/cykelfargen/reviews/?ref=page_internal" target="_blank" rel="noopener noreferrer">Facebook reviews</a>
                    </div>
                    <div className="truspilot rating">
                        <div className="stars">
                            <div className="elementor-star-rating" title="5/5" itemtype="http://schema.org/Rating" itemscope="" itemprop="reviewRating">
                                <i className="material-symbols-outlined">star_rate</i>
                                <i className="material-symbols-outlined">star_rate</i>
                                <i className="material-symbols-outlined">star_rate</i>
                                <i className="material-symbols-outlined">star_rate</i>
                                <i className="material-symbols-outlined">star_rate</i>
                                <span itemprop="ratingValue" className="elementor-screen-only">5/5</span>
                            </div>
                        </div>
                        <a href="https://dk.trustpilot.com/review/cykelfaergen.info" target="_blank" rel="noopener noreferrer">Trustpilot reviews</a>
                    </div>
                    <div className="google rating">
                        <div className="stars">
                            <div className="elementor-star-rating" title="5/5" itemtype="http://schema.org/Rating" itemscope="" itemprop="reviewRating">
                                <i className="material-symbols-outlined">star_rate</i>
                                <i className="material-symbols-outlined">star_rate</i>
                                <i className="material-symbols-outlined">star_rate</i>
                                <i className="material-symbols-outlined">star_rate</i>
                                <i className="material-symbols-outlined">star_rate</i>
                                <span itemprop="ratingValue" className="elementor-screen-only">5/5</span>
                            </div>
                        </div>
                        <a href="https://www.google.com/search?client=safari&cs=1&output=search&q=Cykelfærgen+Flensborg+fjord&ludocid=18334368944837627769&gsas=1&client=safari&lsig=AB86z5WFs3vNT0LdaEbq_eHgxL0H&sa=X&ved=2ahUKEwiKpMfbwKb-AhXC_aQKHeMqD50Qj9IGKAB6BAgYEAE&biw=1440&bih=743&dpr=2" target="_blank" rel="noopener noreferrer">Google reviews</a>
                    </div>
                </div>
                <section className="btn_container">
                    <a href="#tickets" className="btn btn-second">Se priser</a>
                    <a href="https://booking.cykelfaergen.info?utm_campaign=Booking2023&utm_source=hero-banner&utm_medium=banner&utm_content=Book+din+25+min.+sejlads" onclick='gtag("event", "generate_lead", {
                        "value": 100,
                        "currency": "DKK",
                        "event_category": "Cykelfærgen - Bookig",
                        "event_label": "Book din sejlads her"
                    }),fbq("Lead", {
                        "content_category": "Cykelfærgen - Bookig",
                        "content_name": "Book din sejlads her"
                    })' className="btn hero-btn">Book din sejlads her<i className="arrow down-arrow"></i></a>
                </section>
                <iframe className="hero-video" src="https://www.youtube-nocookie.com/embed/ToPYUlPbhRg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </section>
            <section class="search-container-bg">
               {/*  <img class="search-container-bg-img" src="/assets/ferry-promo-happy.jpeg" alt="" srcset="" /> */}
                {/* <div class="hero-overlay">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 809 419" class="css-jwstly eoe3qck2"><defs><linearGradient id="leftShaftGradA" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#C3E0F4" stop-opacity=".7" class="css-4tqk3n eoe3qck0"></stop><stop offset="100%" stop-color="#C3E0F4" stop-opacity="0" class="css-4tqk3n eoe3qck0"></stop></linearGradient><linearGradient id="leftShaftGradB" x1="100%" x2="24.236%" y1="50%" y2="50%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><linearGradient id="leftShaftGradC" x1="100%" x2="0%" y1="50%" y2="50%"><stop offset="0%" stop-color="#FFF"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><linearGradient id="leftShaftGradD" x1="100%" x2="0%" y1="50.002%" y2="50.002%"><stop offset="0%" stop-color="#FFF" stop-opacity=".3"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><linearGradient id="leftShaftGradE" x1="11.903%" y1="50%" y2="50%"><stop offset="0%" stop-color="#C3E0F4" class="css-4tqk3n eoe3qck0"></stop><stop offset="100%" stop-color="#C3E0F4" stop-opacity=".4" class="css-4tqk3n eoe3qck0"></stop></linearGradient><rect id="leftShaftGradF" width="372" height="419"></rect></defs><g fill="none" fill-rule="evenodd"><polygon fill="url(#leftShaftGradA)" fill-rule="nonzero" points="371 0 687 0 445.084 419 371 419"></polygon><polygon fill="url(#leftShaftGradB)" fill-rule="nonzero" points="664.828 0 739 0 490.172 419 416 419"></polygon><polygon fill="url(#leftShaftGradC)" fill-rule="nonzero" points="734.598 0 809 0 559.402 419 485 419" opacity=".1"></polygon><polygon fill="url(#leftShaftGradD)" fill-rule="nonzero" points="705.551 0 715 0 714.373 1.057 466.449 419 457 419 704.968 .983"></polygon><polygon fill="url(#leftShaftGradE)" fill-rule="nonzero" points="371 419 376.5 419 613 0 371 0"></polygon><rect fill="#046c6d" fill-rule="nonzero" width="372" height="419"></rect></g></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="300" height="419" viewBox="0 0 300 419" class="css-seqzpf eoe3qck1"><defs><rect id="righgtShaftExportA" width="300" height="419"></rect><linearGradient id="rightShaftExportB" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#C3E0F4" stop-opacity=".7" class="css-4tqk3n eoe3qck0"></stop><stop offset="100%" stop-color="#C3E0F4" stop-opacity="0" class="css-4tqk3n eoe3qck0"></stop></linearGradient><polygon id="rightShaftExportC" points="316 420 0 420 241.916 0 316 0"></polygon><linearGradient id="rightShaftExportD" x1="100%" x2="1.587%" y1="50%" y2="50%"><stop offset="0%" stop-color="#C3E0F4" stop-opacity="0" class="css-4tqk3n eoe3qck0"></stop><stop offset="100%" stop-color="#C3E0F4" stop-opacity=".4" class="css-4tqk3n eoe3qck0"></stop></linearGradient><polygon id="rightShaftExportE" points="74.172 419 0 419 248.828 0 323 0"></polygon><linearGradient id="rightShaftExportF" x1="100%" x2="20.222%" y1="50.002%" y2="50.002%"><stop offset="0%" stop-color="#FFF"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><linearGradient id="rightShaftExportG" x1="100%" x2="17.098%" y1="50%" y2="50%"><stop offset="0%" stop-color="#FFF" stop-opacity=".3"></stop><stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><linearGradient id="rightShaftExportH" x1="0%" x2="50%" y1="61.13%" y2="61.13%"><stop offset="0%" stop-color="#C3E0F4" stop-opacity="0" class="css-4tqk3n eoe3qck0"></stop><stop offset="100%" stop-color="#C3E0F4" class="css-4tqk3n eoe3qck0"></stop></linearGradient><polygon id="rightShaftExportI" points="242 0 236.5 0 0 420 242 420"></polygon></defs><g fill="none" fill-rule="evenodd"><mask id="rightShaftExportJ" fill="#fff"><use xlink:href="#righgtShaftExportA"></use></mask><g mask="url(#rightShaftExportJ)"><g transform="translate(6 -1)"><g transform="translate(121)"><use fill="url(#rightShaftExportB)" fill-rule="nonzero" xlink:href="#rightShaftExportC"></use></g><g transform="translate(68 1)"><use fill="url(#rightShaftExportD)" fill-rule="nonzero" xlink:href="#rightShaftExportE"></use></g><polygon fill="url(#rightShaftExportF)" fill-rule="nonzero" points="74.272 419.986 0 419.986 249.163 0 323.435 0" opacity=".1"></polygon><polygon fill="url(#rightShaftExportG)" fill-rule="nonzero" points="100.412 421 91 421 338.602 1 348 1"></polygon><g transform="translate(195)"><use fill="url(#rightShaftExportH)" fill-rule="nonzero" xlink:href="#rightShaftExportI"></use></g></g></g></g></svg>
                </div> */}
            </section>
        </article>
    </>
}