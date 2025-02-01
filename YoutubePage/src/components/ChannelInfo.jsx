export default function ChannelInfo(){
  return(
    <main>
        <div className="img-container">
          <img
            src="https://yt3.googleusercontent.com/dTALbEweryLrNnibfHGep4D4xlXEfjXOuj-IJjCO_OqNGIYLWN2-A1I0a9Ip3yk6BLvHFwyIYs4=w1138-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
            alt="coverPhoto"
            className="cover-photo"
          />
        </div>
        <div className="channel-container">
          <div className="channel-img">
            <img
              src="https://yt3.googleusercontent.com/PKUi-Lc3VFjUfsIhjK3n-FJDNBf-XQLdg4G4bv4fPFF96D3MVnkbub9ePpLoWdmdFgl5I1Zd=s160-c-k-c0x00ffffff-no-rj"
              alt="TedEd"
              className="channel-logo"
            />
          </div>
          <div className="channel-info">
            <h1>TED-Ed</h1>

            <p>
              <span>@TEDEd</span> • 21M subscribers • 2.2K videos
            </p>

            <p>TED-Ed’s mission is to create lessons worth sharing.</p>

            <input type="button" value="Subscribe" />
          </div>
        </div>
      </main>
  )
}