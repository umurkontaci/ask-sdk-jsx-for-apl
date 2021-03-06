/*
  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the "License").
  You may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import omit from 'lodash/omit';
import * as React from 'react';
import { APLImports } from '../../root';
import { ListComponent } from '../../common';
const imports = [{ name: 'alexa-layouts', version: '1.1.0' }];
export interface AlexaListsProps {
  /* Colors will be switched depending on the specified theme (light/dark). Default to dark theme */
  theme?: string;
  /* Primary text to render in header. */
  headerTitle?: string;
  /* Secondary text to render in header. */
  headerSubtitle?: string;
  /* Attribution text to render in header.  Only shown when no headerAttributionImage is provided, and when headerAttributionPrimacy is true, or on a device that shows Title/Subtitle and Attribution. */
  headerAttributionText?: string;
  /* URL for attribution image source. Only shown when headerAttributionPrimacy is true, or on a device that shows Title/Subtitle and Attribution. */
  headerAttributionImage?: string;
  /* On devices that can only display one element due to screen size, Attribution is prioritized. Setting False displays Title/Subtitle.  Defaults to true. */
  headerAttributionPrimacy?: boolean | string;
  /* Toggle to display the divider that appears at the bottom of header to help separate it from the content below. Default to false */
  headerDivider?: boolean | string;
  /* Toggle to display back button in header.  Defaults to false. */
  headerBackButton?: boolean | string;
  /* An accessibility label to describe the back button to customers who use a screen reader. */
  headerBackButtonAccessibilityLabel?: string;
  /* Command that is issued when back button is pressed. */
  headerBackButtonCommand?: any;
  /* Optional color value to use as background color for Header. Defaults to transparent. */
  headerBackgroundColor?: string;
  /* Color value to use as background color for layout. */
  backgroundColor?: string;
  /* URL for background image source. */
  backgroundImageSource?: string;
  /* URL for background video source. */
  backgroundVideoSource?: any;
  /* Image/video scale to apply to background image/video. Defaults to best-fill. */
  backgroundScale?: string;
  /* Image/video alignment to apply to background image/video. Defaults to center. */
  backgroundAlign?: string;
  /* Toggle to apply background blur. Defaults to false. */
  backgroundBlur?: boolean | string;
  /* Toggle to apply overlay scrim to background image/video. Defaults to false. */
  backgroundColorOverlay?: boolean | string;
  /* Toggle to apply gradient to background image/video. Defaults to false. */
  backgroundOverlayGradient?: boolean | string;
  /* Toggle to autoplay background video(s). Defaults to false. */
  backgroundVideoAutoPlay?: boolean | string;
  /* Audio track to play on. Defaults to foreground. EM can select foreground | background | none. */
  backgroundVideoAudioTrack?: string;
  /* Toggle to hide the divider that appears at the bottom of each item to help separate it from the content below. Default to false. */
  hideDivider?: boolean | string;
  /* Toggle to hide ordinal in list item. Defaults to false. */
  hideOrdinal?: boolean | string;
  /* The action that is triggered when the item is selected. */
  primaryAction?: any;
  /* Toggle to switch between touch forward and voice forward. Only works when listImagePrimacy is false or primary text is promoted. Defaults to false, voice forward */
  touchForward?: boolean | string;
  /* Array of list item datasources to present in list.  See documentation on list item datasources for required data signature. */
  listItems?: any;
  /* Primary empty state message */
  emptyPrimaryText?: string;
  /* Secondary empty state message */
  emptySecondaryText?: string;
  /* Hint text to display in Footer. */
  footerHintText?: string;
  /* Toggle to hide the overlay (scrim) between image and content to increase content readability. Defaults to false. */
  imageHideScrim?: boolean | string;
  /* Dimension value to set image height */
  imageHeight?: string;
  /* Aspect ratio of the image. Options are square, round, standard_landscape, standard_portrait, poster_landscape, poster_portrait, widescreen. Default to square */
  imageAspectRatio?: string;
  /* Scale setting for the image. Options are none, fill, best-fit, best-fill, best-fit-down. Default to best-fit */
  imageScale?: string;
  /* Alignment setting for the image. Options are bottom, bottom-left, bottom-right, center, left, right, top, top-left, top-right. Default to center */
  imageAlignment?: string;
  /* Whether to use rounded corners for the image */
  imageRoundedCorner?: boolean | string;
  /* Set a blurred version of the image to appear behind the image to create a visually consistent container size */
  imageBlurredBackground?: boolean | string;
  /* URI for the default image on the list item so the image containers are never empty */
  defaultImageSource?: string;
  /* The number of list items in one screen */
  listItemHorizontalCount?: any;
  /* Toggle to display the progress bar on the image overlay. The progress bar will be displayed if imageProgressBarPercentage parameter is defined. Defaults to true. */
  imageShowProgressBar?: boolean | string;
  /* When true, the list layout adapts to promote the provided image sources as the primary wayfinding element, usually in horizontal navigation.  When false the primary text is promoted, usually in vertical navigation. Defaults to false. */
  listImagePrimacy?: boolean | string;
  [key: string]: unknown;
}
export const AlexaLists = (props: React.PropsWithChildren<AlexaListsProps>) => {
  return (
    <>
      <APLImports imports={imports} />
      <ListComponent
        definition={{ type: 'AlexaLists', ...omit(props, ['children']) }}>
        {props.children}
      </ListComponent>
    </>
  );
};
