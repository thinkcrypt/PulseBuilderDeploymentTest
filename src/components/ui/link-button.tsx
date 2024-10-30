'use client';

import type { HTMLChakraProps, RecipeProps } from 'chakra3';
import { createRecipeContext } from 'chakra3';

export interface LinkButtonProps extends HTMLChakraProps<'a', RecipeProps<'button'>> {}

const { withContext } = createRecipeContext({ key: 'button' });

// Replace "a" with your framework's link component
export const LinkButton = withContext<HTMLAnchorElement, LinkButtonProps>('a');
