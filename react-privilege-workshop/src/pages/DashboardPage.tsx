export const DashboardPage = () => {
  return (
    <div>
      <div className="grid">
        <div className="col-12 md:col-6 lg:col-3">
          <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">Orders</span>
                <div className="text-900 font-medium text-xl">152</div>
              </div>
              <div
                className="flex align-items-center justify-content-center bg-blue-100 border-round"
                style={{ width: '2.5rem', height: '2.5rem' }}
              >
                <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
              </div>
            </div>
            <span className="text-green-500 font-medium">24 new </span>
            <span className="text-500">since last visit</span>
          </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
          <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">Revenue</span>
                <div className="text-900 font-medium text-xl">$2.100</div>
              </div>
              <div
                className="flex align-items-center justify-content-center bg-orange-100 border-round"
                style={{ width: '2.5rem', height: '2.5rem' }}
              >
                <i className="pi pi-map-marker text-orange-500 text-xl"></i>
              </div>
            </div>
            <span className="text-green-500 font-medium">%52+ </span>
            <span className="text-500">since last week</span>
          </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
          <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">
                  Customers
                </span>
                <div className="text-900 font-medium text-xl">28441</div>
              </div>
              <div
                className="flex align-items-center justify-content-center bg-cyan-100 border-round"
                style={{ width: '2.5rem', height: '2.5rem' }}
              >
                <i className="pi pi-inbox text-cyan-500 text-xl"></i>
              </div>
            </div>
            <span className="text-green-500 font-medium">520 </span>
            <span className="text-500">newly registered</span>
          </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
          <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">
                  Comments
                </span>
                <div className="text-900 font-medium text-xl">152 Unread</div>
              </div>
              <div
                className="flex align-items-center justify-content-center bg-purple-100 border-round"
                style={{ width: '2.5rem', height: '2.5rem' }}
              >
                <i className="pi pi-comment text-purple-500 text-xl"></i>
              </div>
            </div>
            <span className="text-green-500 font-medium">85 </span>
            <span className="text-500">responded</span>
          </div>
        </div>
        <div className="col-12 lg:col-6">
          <div className="surface-card shadow-2 border-round p-4 h-full">
            <div className="flex align-items-center justify-content-between mb-3">
              <div className="text-900 font-medium text-xl">Team Activity</div>
            </div>
            <ul className="list-none p-0 m-0">
              <li className="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                <div className="flex align-items-start mr-0 lg:mr-5">
                  <img
                    src="https://i.pravatar.cc/150"
                    alt="avatar-f-1"
                    className="mr-3 w-3rem h-3rem"
                  />
                  <div>
                    <span className="text-900 font-medium block mb-2">
                      Jane Cooper
                    </span>
                    <div className="text-700 mb-2">responded to an issue.</div>
                    <a className="text-primary cursor-pointer">
                      <i className="pi pi-github text-sm mr-2"></i>
                      <span>Issue #1185</span>
                    </a>
                  </div>
                </div>
                <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">
                  14 mins ago
                </span>
              </li>
              <li className="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                <div className="flex align-items-start mr-0 lg:mr-5">
                  <img
                    src="https://i.pravatar.cc/150"
                    alt="avatar-m-1"
                    className="mr-3 w-3rem h-3rem"
                  />
                  <div>
                    <span className="text-900 font-medium block mb-2">
                      Robert Fox
                    </span>
                    <div className="text-700">
                      changed team size from
                      <span className="text-900">5</span> to
                      <span className="text-900">6</span>.
                    </div>
                  </div>
                </div>
                <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">
                  20 mins ago
                </span>
              </li>
              <li className="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                <div className="flex align-items-start mr-0 lg:mr-5">
                  <img
                    src="https://i.pravatar.cc/150"
                    alt="avatar-f-2"
                    className="mr-3 w-3rem h-3rem"
                  />
                  <div>
                    <span className="text-900 font-medium block mb-2">
                      Kristin Watson Cooper
                    </span>
                    <div className="text-700 mb-2">
                      created a Q4 presentation to an issue.
                    </div>
                    <a className="text-primary cursor-pointer">
                      <i className="pi pi-file-pdf text-sm mr-2"></i>
                      <span>q4_presentation.pdf</span>
                    </a>
                  </div>
                </div>
                <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">
                  38 mins ago
                </span>
              </li>
              <li className="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                <div className="flex align-items-start mr-0 lg:mr-5">
                  <img
                    src="https://i.pravatar.cc/150"
                    alt="avatar-f-3"
                    className="mr-3 w-3rem h-3rem"
                  />
                  <div>
                    <span className="text-900 font-medium block mb-2">
                      Annette Black
                    </span>
                    <div className="text-700">
                      added
                      <span className="text-900 font-medium">
                        Nico Greenberg
                      </span>
                      to
                      <span className="text-primary">Watchlist Tier-1</span>.
                    </div>
                  </div>
                </div>
                <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">
                  1 day ago
                </span>
              </li>
              <li className="py-3 flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                <div className="flex align-items-start mr-0 lg:mr-5">
                  <img
                    src="https://i.pravatar.cc/150"
                    alt="avatar-m-2"
                    className="mr-3 w-3rem h-3rem"
                  />
                  <div>
                    <span className="text-900 font-medium block mb-2">
                      Floyd Miles
                    </span>
                    <div className="text-700">
                      has refunded a blue t-shirt for
                      <span className="text-primary">$79</span>.
                    </div>
                  </div>
                </div>
                <span className="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">
                  4 days ago
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 lg:col-6">
          <div className="surface-card shadow-2 border-round p-4 h-full">
            <div className="flex align-items-center justify-content-between mb-4">
              <div className="text-900 font-medium text-xl">Notifications</div>
              <div></div>
            </div>
            <span className="block text-600 font-medium mb-3">TODAY</span>
            <ul className="p-0 mx-0 mt-0 mb-4 list-none">
              <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                  <i className="pi pi-dollar text-xl text-blue-500"></i>
                </div>
                <span className="text-900 line-height-3 font-medium">
                  Richard Jones
                  <span className="text-700 font-normal">
                    has purchased a blue t-shirt for
                    <span className="text-primary font-medium">$79</span>
                  </span>
                </span>
              </li>
              <li className="flex align-items-center py-2">
                <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-orange-100 border-circle mr-3 flex-shrink-0">
                  <i className="pi pi-download text-xl text-orange-500"></i>
                </div>
                <span className="text-700 line-height-3">
                  Your request for withdrawal of
                  <span className="text-primary font-medium">$2500</span>
                  has been initiated.
                </span>
              </li>
            </ul>
            <span className="block text-600 font-medium mb-3">YESTERDAY</span>
            <ul className="p-0 m-0 list-none">
              <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                  <i className="pi pi-dollar text-xl text-blue-500"></i>
                </div>
                <span className="text-900 line-height-3 font-medium">
                  Keyser Wick
                  <span className="text-700 font-normal">
                    has purchased a black jacket for
                    <span className="text-primary font-medium">$59</span>
                  </span>
                </span>
              </li>
              <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-pink-100 border-circle mr-3 flex-shrink-0">
                  <i className="pi pi-question text-xl text-pink-500"></i>
                </div>
                <span className="text-900 line-height-3 font-medium">
                  Jane Davis
                  <span className="text-700 font-normal">
                    has posted a new questions about your product.
                  </span>
                </span>
              </li>
              <li className="flex align-items-center py-2">
                <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-green-100 border-circle mr-3 flex-shrink-0">
                  <i className="pi pi-arrow-up text-xl text-green-500"></i>
                </div>
                <span className="text-900 line-height-3 font-medium">
                  Claire Smith
                  <span className="text-700 font-normal">
                    has upvoted your store along with a comment.
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
