import * as yup from 'yup';

import { schema } from '@/utils/validation';

export type FormData = yup.InferType<typeof schema>;
