import { json } from '@sveltejs/kit';
import { Client, Environment } from 'square';
import { SQUARE_ACCESS_TOKEN, SQUARE_LOCATION_ID } from '$env/static/private';

const client = new Client({
    accessToken: SQUARE_ACCESS_TOKEN,
    environment: Environment.Sandbox // Switch to Environment.Production when ready
});

export async function POST({ request }) {
    try {
        const { sourceId, amount } = await request.json();

        const { result } = await client.paymentsApi.createPayment({
            idempotencyKey: crypto.randomUUID(),
            sourceId,
            amountMoney: {
                amount: BigInt(amount * 100), // Convert to cents
                currency: 'USD'
            },
            locationId: SQUARE_LOCATION_ID
        });

        // result is a BigInt, need to stringify it for JSON
        return json({
            success: true,
            payment: JSON.parse(JSON.stringify(result.payment, (key, value) =>
                typeof value === 'bigint' ? value.toString() : value
            ))
        });
    } catch (error) {
        console.error('Square Payment Error:', error);
        return json({
            success: false,
            error: error.message || 'Payment failed'
        }, { status: 500 });
    }
}
