const ManagerWelcome = () => {
    const profileImageUrl = "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/e177/7767/d42d3b942aa4a5eb152d05f19a60ebaf?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WR319MyvDZrOh9t9pwpvb8n6XVGUpR6v5GJM71x4WXOrE220zEPBlnTGe3Lv3FW43M2IJgnoevK0Csd85d-S43rp2V2ry5gw1LjNMNgDcQzeHTMRfszLTxgfaCrJFepqloW3x6QJmcqLWDexuE0e8UvwFuIhSd5njPQ62SEkiHC5~ZggQIkVaGNkjYDfTjM-o00ualgpbNIOF0vDxmLP7cUWxiP65W9g9Vo4ZlB4vT~rIHuM2THtLchuq64nCf7b3q1Q6DTIdr4DYz1HU0zJnFXdWGPjewD90Wz-gjm3rriSUe6RNyeQPDAjnP0RokUaUipzacsgAx2aKS3urkVZvA__";
    return (
        <div className="flex items-center gap-4">
            <img src={profileImageUrl} alt="Manager" className="h-14 w-14 rounded-full border-4 border-white shadow-lg" />
            <div>
                <h1 className="text-lg font-bold text-nimasa-dark-text">Welcome, Manager!</h1>
                <p className="text-sm text-nimasa-dark-text mt-0.5">Here's an overview of your team's leave status.</p>
            </div>
        </div>
    );
}

export default ManagerWelcome;
