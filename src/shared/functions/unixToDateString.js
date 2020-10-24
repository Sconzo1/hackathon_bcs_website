function unixToDateString(unix) {
    const date = new Date(unix);
    const year = new Intl.DateTimeFormat('ru', { year: 'numeric' }).format(date)
    const month = new Intl.DateTimeFormat('ru', { month: 'short' }).format(date)
    const day = new Intl.DateTimeFormat('ru', { day: 'numeric' }).format(date)

    return (
        `${day} ${month} ${year}`
    );
}

export default unixToDateString;
