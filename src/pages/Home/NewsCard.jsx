import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {

    const { image_url, title, details, _id } = news;

    return (
        <div className="card mb-20">
            <figure>
                <img
                    src={image_url}
                    alt="Shoes" />
            </figure>
            <div className="mt-4">
                <h2 className="card-title mb-4">{title}</h2>
                {
                    details.length > 200
                        ?
                        <p>{details.slice(0, 200)}
                            <Link to={`/news/${_id}`} className="text-blue-600 font-bold">Read More...</Link></p>
                        : <p>{details}</p>
                }
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    news: PropTypes.object
};

export default NewsCard;