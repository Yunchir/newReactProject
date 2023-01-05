import "./../styles/main.css"

export default function Main () {
    return ( 
        <main className="container">
            <div className="group">
            <div>
                <h1>LEft</h1>
            </div>
            <div >
                <div className="question">
                <h2>All Questions</h2>
                <button className="askBtn">Ask Question</button>
                </div>
                <div className="list">
                    <span className="list_num">23,377,523 questions</span>
                    <div className="items">
                        <div>
                            <ul className="item">
                                <li><a className="newest" href="#">Newest</a></li>
                                <li><a href="#">Active</a></li>
                                <li><a href="#">Bountied <span className="bountiedNum">243</span> </a></li>
                                <li><a href="#">Unanswered</a></li>
                                <li><a href="#">Bountied 243</a></li>
                            </ul>
                        </div>
                        <div>
                            <button className="filterBtn">Filter</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1>RIght</h1>
            </div>
            </div>
            
        </main>
    )
};