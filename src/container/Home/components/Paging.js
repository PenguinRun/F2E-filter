import React, { Component } from 'react';

class Paging extends Component {
    render() {
        return (
            <div className="paging-area">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link paging-box" href="" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link paging-box" href="">1</a></li>
                        <li className="page-item"><a className="page-link paging-box" href="">2</a></li>
                        <li className="page-item"><a className="page-link paging-box" href="">3</a></li>
                        <li className="page-item"><a className="page-link paging-box" href="">4</a></li>
                        <li className="page-item"><a className="page-link paging-box" href="">5</a></li>
                        <li className="page-item">
                            <a className="page-link paging-box" href="" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Paging;