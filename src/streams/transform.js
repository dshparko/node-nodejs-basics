import stream from "stream";

const transform = async () => {
    stream.pipeline(
        process.stdin,
        new stream.Transform({
            transform(chunk, encoding, callback) {
            },
        }),
        process.stdout,
        (err) => {
            if (err) throw err;
        }
    );
};

await transform();