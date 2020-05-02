import React from "react";
import { has } from "lodash";
import Level, { GameCellContent, Coords } from "../../../model/Level";

import classNames from "classnames";
import MarkdownComponent from "../../MarkdownComponent";

import pieces from './SpecificPieces';

export interface IconProps {
  className?: string
}

export interface ControlProps {
  className?: string,
  content: GameCellContent,
  level: Level,
  coordinates: Coords,
  refresh: CallableFunction
}

interface CellContentIconProps {
  className?: string,
  content: GameCellContent
}

export const CellContentIcon : React.FC<CellContentIconProps> = ({className, content}) => {
  if (!has(pieces, content.type)) return (<></>);
  const IconComponent = pieces[content.type].icon;
  if (!IconComponent) return (<></>);
  return <IconComponent
      className={classNames(className, 'ggo-icon', `ggo-icon-${content.type}`, `ggo-icon-${content.type}-${content.subtype || 'default'}`)} />
}

interface CellContentDescriptionProps {
  className?: string,
  content: GameCellContent
}

export const CellContentDescription : React.FC<CellContentDescriptionProps> = ({content}) => {
  if (!has(pieces, content.type)) return (<></>);
  const description = pieces[content.type].description;
  if (!description) return (<></>);
  return (
    <MarkdownComponent
      className={classNames(
        'ggo-description',
        `ggo-description-${content.type}`,
        `ggo-description-${content.type}-${content.subtype || 'default'}`
      )}
      source={description}
      transformations={{...content}} />
  );
}

interface CellContentControlProps {
  className?: string,
  content: GameCellContent,
  coordinates: Coords,
  level: Level,
  refresh: CallableFunction
}

export const CellContentControls : React.FC<CellContentControlProps> =
  (props) => {
    const {className, content, ...otherProps} = props;
    if (!has(pieces, content.type)) return (<></>);
    const ControlsComponent = pieces[content.type].controls;
    if (!ControlsComponent) return (<></>);
    return (
      <>
        {ControlsComponent !== null &&
          <ControlsComponent
            {...otherProps}
            content={content}
            className={classNames(className,
              'ggo-controls',
              `ggo-controls-${content.type}`,
              `ggo-controls-${content.type}-${content.subtype || 'default'}`)} />
        }
      </>
    )
}