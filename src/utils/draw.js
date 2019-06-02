function draw(frame) {
    const canvas = document.getElementById('canvas');

    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');

        frame.forEach((row, i) => {
            row.forEach((column, j) => {
                ctx.fillStyle = column;
                ctx.fillRect(j * 75, i * 75, 75, 75);
            });
        });
    }
}

export {draw};
