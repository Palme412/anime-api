const mongoose = require('mongoose');

const seasonSchema = new mongoose.Schema({
    url: String,
    title: { type: String, required: true },
    image_url: String,
    synopsis: String,
});

const Season = mongoose.model("Season", seasonSchema);

class seasonsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    };
}
componentDidMount() {
    axios.get('https://localhost:3000/season')
}



module.exports = Season;