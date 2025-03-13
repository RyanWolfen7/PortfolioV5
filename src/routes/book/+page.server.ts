import type { PageServerLoad, Actions } from './$types';


const test = {
    name: 'First Task of the Day',
  email: 'ryan.a.clark.fullstack.dev@gmail.com',
  projectType: 'mobile',
  projectDetails: 'fjhufrusd iyurdr',
  'g-recaptcha-response': '03AFcWeA50nh_fUYT_WTpxcrq_KZ-7fZLWzZkjIFSgWjzJA--O3rRgfc1TW-GLEvQ-BXEKCHyiViYFKhBTtSdkdXSohGl-KYd1mX_pQgZ7su4mrM50aRhD_r1ZKyxma9qcmjJ0dxCnIC-bncnX5ZCi1XRvDeZzDT9t4sPSZxJtszQxfmtkcBRRvveWOpfWAKWaDXm1j_buTYJ9Q4V-_PbboIIFnU82yJb8YxC35ytoThzaC9F_Oe0MKxCmMDeQW5glTMojB1tDAODyBnq7MnInN4TnvlwJCp6tA1PHzKRJrvPhY_mbeV7gtdmotd1iAQe6VWI0izmlX7FcnOJyGOfLnGSgrU4gqmmWqY4s6PGL9DmMU0EwLBBn9bHothlQqrNeH9P7LKmUAxpng1JAuxOfkWZ61nXdxHdKoJkidH4Dplcx8TjCDqo0BxNG7z-gqqRJCrkP422HY9hW-GdtlpTZ3xELibgzZBuIl2dapLqZ5IYrfGBDv7Z4s6FPYgTWVBk5VMx4ZZvic9ooKvMUwzqm5W7jMbi5kuEO8_KYLHBj7xOjMbyEcPBovVhNEMVFWosSdepA6GSAtWdJ-fvyiC3xFiCY4BXZ2mwE9dnLZkbeyLYHzMfNp0DmuegwyJqVhQ6411tQddiZIneSxIAhhsWsvNDhCV7rlMWbZTPRJujkyv5gEv8ZKVnYAwcB3QClUTwMPFuQEjh-JCXrsbjZPMLrmKdks7xZ3IiNwWKWmlZjiropAFb_4vh_lCG-xdTSEkzaGMMIfTh_GGnWeweO2mUBkVwuhlVRgperZQtvAQ6WlprlMO8l4WgukThKDsnZyZqMLo3BkyNq_xtFZtuhgxoW_fxHjQRv_XP7vvUT77redm76CtHaXh-bMgBJw5m7wCHhSwUxF1m1UM0O313jz98EnnrwcVNb1QLYcEitC_W1k8oemMS1vSpsSm1OIxGpw_TDrLIUjhloB9bGqVBG71ULpUSGIOQ4tOZqyh1AuD0UIi47j3cnA1YrTTtONy47c1vItq7thEes5bNZCoB-AxnORWNTByr0ivv0_im90ypndRXVgkMkYIuEd_u8m8qH6UZQm_HEte8Nbis7cLY2vwB-vg3bYDREfMyhaNjEEN9skWVtg3r9C0WpyxikpyDWQbzuAE7T1JogMNouPzbjHB2xJRyYEqRzrFRAwmPAB9U7QjCKYw0RB4VTskWAB3afq4pQcvvhcLQI2T_y4P8Jc6Ske3_iCRxHASyCUK1bva06uCQb1UKMtmO9RJtUeQeQ-xelc9o_iHRlRd7zlDxNQFIvRkkfR4lrjMrP1_f5Ps3fGjW4Y5dWuaCztDaG0_Myl00slDW1vFt0a3yYH_GLw_TgnmaQvgPiiFDePin5QMdwA2YFM4kd2g8tW6yIGyFHTV0kr6YC2Y4Ca_E5qSVPe5qfw2u0O9FO7eTjhu2SISYa9voeBxes0FNTKJngbj07FhZk6IwhYe7W9m8UTdJx4_ljqBmKWeKZXYb7cI2WFodxQ6i5vHtTJF-4CtyCbENdtaRcmv0kyH7jWI3wYLmASBioEUe49oWUXENbA4mDy6cTAqn7uJLgZiYmVTKgildFsEGnE1PsiNSrdkaZZrQneHWIcoyo9P_ctexWV9rRimv1f1scBfWm9rpUT6V-0Qd6xo626ZjVHfhx-zGrSTHawqdmaRsMHTXYAJXdalaWaYb7rFcZGC-t8cpwi0My1sJFmjDde9Y8yy-NSd6RV5e6kf6I1AoHoiW67C4z1g-XHFgprBrNKVgkVa4yJcMbLFHX-xLWCdmcQ-0vmNfZykC6SnExPvPazhEJ8Yx5JzNWGZt44mSY6L6F_gHwDmBQ2RtvVgvK_qkwllClw49XLskeq8X3OuGG0tRpKTqyaKhmB4RwEWbXqQiZ_4AWljgQyxWE5RkPjqbKVWFQ79vfptWcrmOotu-ZRDqgipRkmK2JkK2kYyrZ-9TRj_iULPkCRAnXYvA5bh5ZN6DgwvP3TOmyQ_fqhkg86cipZERxaM2hAvZDbXXJHOnOIsXspVK_Xwpw6030cHDLIj4JeHIf-MTq-gHdqgHh5m7pBTrQ9DLdNC9QB4T-TCLFWLTxaZ4'
}
export const load: PageServerLoad = async ({ params }) => {

}

export const actions: Actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();
        const headers = await request.headers;
        console.log('data', data);
        return {success: true}
    }
} satisfies Actions;