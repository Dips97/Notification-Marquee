import * as React from 'react';
import * as ReactDom from 'react-dom';
import NotificationMarquee from './components/NotificationMarquee';
import { INotificationMarqueeProps } from './components/INotificationMarqueeProps';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IPropertyPaneConfiguration, PropertyPaneTextField } from '@microsoft/sp-property-pane';

export interface INotificationMarqueeWebPartProps {
  message: string;
}

export default class NotificationMarqueeWebPart extends BaseClientSideWebPart<INotificationMarqueeWebPartProps> {
  public render(): void {
    const element: React.ReactElement<INotificationMarqueeProps> = React.createElement(
      NotificationMarquee,
      {
        message: this.properties.message
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: { description: "Notification Marquee Settings" },
          groups: [
            {
              groupName: "Message Settings",
              groupFields: [
                PropertyPaneTextField('message', {
                  label: "Notification Message"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
