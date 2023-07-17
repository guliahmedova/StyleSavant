import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({ timestamp }) => {
    let timeAgo = '';
    if (timestamp) {
        const date = parseISO(timestamp);
        const timePeriod = formatDistanceToNow(date);
        timeAgo = `${timePeriod} agp`
    }

    return (
        <div className="text-white">
            &nbsp; <span>{timeAgo}</span>
        </div>
    )
}

export default TimeAgo