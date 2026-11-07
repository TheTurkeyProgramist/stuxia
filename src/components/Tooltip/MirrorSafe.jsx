import React from "react";
import { FloatingPortal } from "@floating-ui/react";
import { getFloatingRoot } from "../../utils/siteMirror";

/**
 * FloatingPortal, який правильно працює з дзеркальністю сайту:
 * у дзеркальному режимі рендерить у шар-компенсатор (див. utils/siteMirror.js).
 */
export const MirrorFloatingPortal = ({ children }) => (
  <FloatingPortal root={getFloatingRoot()}>{children}</FloatingPortal>
);

/** Текст усередині шару-компенсатора знову віддзеркалюється, щоб виглядати як решта сайту. */
export const MirrorText = ({ children }) => (
  <span className="site-mirror-text">{children}</span>
);
