import { useState } from "react"
import { TabItem, TabsContainer } from "./styledComponents"

const tabItems = ["DETAILS", "PAYMENT"]

const CheckOuts = () => {
  const [activeTab, setActiveTab] = useState(tabItems[0])

  const renderDetailsBlock = () => <h1>User Details</h1>

  const renderPaymentBlock = () => <h1>User Payment</h1>

  const isDetailsTabActive = activeTab === tabItems[0]
  const isPaymentTabActive = activeTab === tabItems[1]
  return (
    <>
      <TabsContainer>
        <TabItem
          onClick={() => setActiveTab(tabItems[0])}
          isActiveTab={isDetailsTabActive}
        >
          Details
        </TabItem>
        <TabItem
          onClick={() => setActiveTab(tabItems[1])}
          isActiveTab={isPaymentTabActive}
        >
          Payment
        </TabItem>
      </TabsContainer>
      {isDetailsTabActive && renderDetailsBlock()}
      {isPaymentTabActive && renderPaymentBlock()}
    </>
  )
}

export default CheckOuts
