import React from "react";
import {
  Page,
  Breadcrumbs,
  Button,
  Row,
  Col,
  Container,
  CardGalleryItem,
  Proportion,
  AddItem
} from "wix-style-react";

class App extends React.Component {
  renderHeader() {
    const ActionBar = () => {
      return <Button>Save</Button>;
    };

    return (
      <Page.Header
        title="Page Title"
        breadcrumbs={
          <Breadcrumbs
            items={[1, 2, 3].map(i => ({ id: `${i}`, value: `Page ${i}` }))}
            activeId="3"
            size="medium"
            theme="onGrayBackground"
            onClick={() => {}}
          />
        }
        actionsBar={<ActionBar />}
      />
    );
  }

  renderCardGalleryItem() {
    const backgroundImageUrl =
      "https://images.unsplash.com/photo-1562887284-8ba6b7c90fd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2900&q=80";

    return (
      <CardGalleryItem
        title={"Card Title"}
        subtitle={"Card subtitle"}
        primaryActionProps={{
          label: "Button",
          onClick: () => {
            alert("Primary action clicked");
          }
        }}
        secondaryActionProps={{
          label: "Text link",
          onClick: () => {
            alert("Secondary action clicked");
          }
        }}
        backgroundImageUrl={backgroundImageUrl}
        data-hook="storybook-card-gallery-item"
      />
    );
  }

  render() {
    return (
      <Page height="100vh">
        {this.renderHeader()}
        <Page.Content>
          <Container>
            {Array.from(Array(2).keys()).map(rowKey => (
              <Row key={rowKey}>
                {Array.from(Array(3).keys()).map(colKey => (
                  <Col key={colKey} span={4}>
                    {this.renderCardGalleryItem()}
                  </Col>
                ))}
              </Row>
            ))}
            <Row>
              <Col span={4}>
                <Proportion>
                  <AddItem size="large">Add Item</AddItem>
                </Proportion>
              </Col>
            </Row>
          </Container>
        </Page.Content>
      </Page>
    );
  }
}

export default App;
