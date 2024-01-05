export default function Bluesky() {
    // nuh uh
}

export async function getServerSideProps() {
    return {
        redirect: {
            destination: "https://bsky.app/profile/martin.blue",
            permanent: true,
        },
    };
}