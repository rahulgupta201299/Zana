import React, { useEffect } from "react"
import { Box, Stack, Typography, Card } from "@mui/material"
import { useDispatch } from "react-redux"
import { TAppDispatch } from "@/Configurations/AppStore"
import trackOrderServiceAction from "@/Redux/Order/Services/TrackOrder"
import { keyframes } from "@mui/system"

// ─── Animations ───────────────────────────────────────────────────────────────
const popIn = keyframes`
  0%   { transform: scale(0.5); opacity: 0; }
  70%  { transform: scale(1.15); }
  100% { transform: scale(1); opacity: 1; }
`

const fillLine = keyframes`
  from { width: 0%; }
  to   { width: 100%; }
`

const fadeSlideUp = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(25, 118, 210, 0.4); }
  50%       { box-shadow: 0 0 0 8px rgba(25, 118, 210, 0); }
`

// ─── Types ────────────────────────────────────────────────────────────────────
type OrderStatusType =
  | "SCHEDULED"
  | "PICKED_UP"
  | "IN_TRANSIT"
  | "OUT_FOR_DELIVERY"
  | "DELIVERED"

interface OrderTrackerProps {
  orderId: string
}

// ─── Constants ────────────────────────────────────────────────────────────────
const ORDER_FLOW: OrderStatusType[] = [
  "SCHEDULED",
  "PICKED_UP",
  "IN_TRANSIT",
  "OUT_FOR_DELIVERY",
  "DELIVERED",
]

const STATUS_CONFIG = {
  SCHEDULED: {
    label: "Scheduled",
    description: "Your order has been scheduled",
    step: 0,
  },
  PICKED_UP: {
    label: "Picked Up",
    description: "Package picked up by courier",
    step: 1,
  },
  IN_TRANSIT: {
    label: "In Transit",
    description: "Your package is on the way",
    step: 2,
  },
  OUT_FOR_DELIVERY: {
    label: "Out for Delivery",
    description: "Delivery agent is on the way",
    step: 3,
  },
  DELIVERED: {
    label: "Delivered",
    description: "Package delivered successfully",
    step: 4,
  },
}

// ─── Checkmark SVG ────────────────────────────────────────────────────────────
const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M2.5 7L5.5 10L11.5 4"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)



// ─── Component ────────────────────────────────────────────────────────────────
export const OrderTracker: React.FC<OrderTrackerProps> = ({ orderId }) => {
  const dispatch = useDispatch<TAppDispatch>()
  const [trackingInfo, setTrackingInfo] = React.useState<{
    orderStatus?: OrderStatusType
    currentStatus?: string
    expectedDeliveryDate?: string | null
  } | null>(null)
  const [mounted, setMounted] = React.useState(false)

  const trackOrder = async () => {
    try {
      const result = await dispatch(trackOrderServiceAction(orderId))
      setTrackingInfo(result)
    } catch (error) {
      console.error("Failed to trackOrder:", error)
    }
  }

  useEffect(() => {
    if (orderId) trackOrder()
  }, [orderId])

  useEffect(() => {
    if (trackingInfo) setMounted(true)
  }, [trackingInfo])

  const { orderStatus, currentStatus, expectedDeliveryDate } = trackingInfo || {}

  const currentStep = orderStatus ? (STATUS_CONFIG[orderStatus]?.step ?? 0) : 0
  const displayTitle = currentStatus || (orderStatus ? STATUS_CONFIG[orderStatus]?.label : "—")
  const displayDescription = orderStatus ? STATUS_CONFIG[orderStatus]?.description : ""

  const totalSteps = ORDER_FLOW.length

  return (
    <Stack spacing={3} sx={{ p: { xs: '16px', sm: '16px' } }}>

      {/* ── Stepper ───────────────────────────────────────────────────────── */}
      <Box sx={{ position: "relative" }}>

        
        <Box
          sx={{
            position: "absolute",
            top: { xs: 13, sm: 16 },
            left: `calc(100% / ${totalSteps} / 2)`,
            right: `calc(100% / ${totalSteps} / 2)`,
            height: 3,
            borderRadius: 99,
            bgcolor: "#e8eaf6",
            zIndex: 0,
          }}
        />

        {/* Green filled rail */}
        {mounted && currentStep > 0 && (
          <Box
            sx={{
              position: "absolute",
              top: { xs: 13, sm: 16 },
              left: `calc(100% / ${totalSteps} / 2)`,
              height: 3,
              borderRadius: 99,
              bgcolor: "#4caf50",
              zIndex: 1,
              width: `calc(${(currentStep / (totalSteps - 1)) * 100}% - (100% / ${totalSteps}))`,
              animation: `${fillLine} 0.8s ease forwards`,
            }}
          />
        )}

        {/* Step circles + labels */}
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ position: "relative", zIndex: 2 }}
        >
          {ORDER_FLOW.map((status, index) => {
            const isCompleted = index < currentStep
            const isActive = index === currentStep

            return (
              <Stack key={status} alignItems="center" sx={{ flex: 1 }}>

                {/* Circle */}
                <Box
                  sx={{
                    width: { xs: 28, sm: 34 },
                    height: { xs: 28, sm: 34 },
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: { xs: 11, sm: 13 },
                    fontWeight: 700,
                    transition: "background-color 0.4s ease",
                    bgcolor: isCompleted
                      ? "#4caf50"
                      : isActive
                      ? "#1976d2"
                      : "#fff",
                    color: isCompleted || isActive ? "#fff" : "#9e9e9e",
                    border: isCompleted || isActive ? "none" : "2px solid #e0e0e0",
                    animation: mounted && isActive
                      ? `${popIn} 0.4s ease ${index * 0.1}s both, ${pulse} 2s ease 0.6s infinite`
                      : mounted && isCompleted
                      ? `${popIn} 0.4s ease ${index * 0.1}s both`
                      : undefined,
                  }}
                >
                  {isCompleted ? <CheckIcon /> : index + 1}
                </Box>

                {/* Label */}
                <Typography
                  variant="caption"
                  sx={{
                    mt: 0.75,
                    textAlign: "center",
                    fontSize: { xs: "9px", sm: "11px" },
                    fontWeight: isActive ? 700 : isCompleted ? 600 : 400,
                    color: isCompleted
                      ? "#4caf50"
                      : isActive
                      ? "#1976d2"
                      : "#9e9e9e",
                    lineHeight: 1.2,
                    letterSpacing: "0.02em",
                    maxWidth: 60,
                    transition: "color 0.3s ease",
                  }}
                >
                  {STATUS_CONFIG[status].label}
                </Typography>
              </Stack>
            )
          })}
        </Stack>
      </Box>

      {/* ── Status Card ───────────────────────────────────────────────────── */}
      <Card
        sx={{
          p: { xs: 2, sm: 2.5 },
          borderRadius: 3,
          border: "1px solid",
          borderColor: "rgba(25,118,210,0.15)",
          boxShadow: "0 4px 24px rgba(25,118,210,0.08)",
          background: "linear-gradient(135deg, #fafcff 0%, #f0f4ff 100%)",
          animation: mounted ? `${fadeSlideUp} 0.5s ease 0.3s both` : undefined,
        }}
      >
        <Stack spacing={1.25}>
          

          <Typography
            variant="subtitle1"
            fontWeight={700}
            sx={{
              fontSize: { xs: "0.95rem", sm: "1rem" },
              color: "#1a237e",
            }}
          >
            {displayTitle}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              lineHeight: 1.6,
              fontSize: { xs: "0.8rem", sm: "0.875rem" },
            }}
          >
            {displayDescription}
          </Typography>

          {expectedDeliveryDate && (
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.75,
                mt: 0.5,
                px: 1.5,
                py: 0.6,
                borderRadius: 99,
                bgcolor: "rgba(76,175,80,0.1)",
                width: "fit-content",
              }}
            >
       
              <Typography
                variant="caption"
                sx={{
                  color: "#388e3c",
                  fontWeight: 600,
                  fontSize: { xs: "10px", sm: "11px" },
                }}
              >
                Expected: {expectedDeliveryDate}
              </Typography>
            </Box>
          )}
        </Stack>
      </Card>
    </Stack>
  )
}